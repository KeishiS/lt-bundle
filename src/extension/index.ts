import NodeCG from "nodecg/types";
import { WEBHOOK_VERIFICATION_TOKEN } from "../../env";
import {
  ParticipantJoinedInfo,
  ParticipantLeftInfo,
  ChatMessage,
} from "../zoomTypes";
import { repDefaultValues, ZoomComment } from "../nodeCGTypes";
import ltData from "../../ltlist.json";

module.exports = (nodecg: NodeCG.ServerAPI) => {
  const eventNameRep = nodecg.Replicant("eventName", {
    defaultValue: repDefaultValues["eventName"],
  });
  nodecg.listenFor("clearEventName", () => {
    eventNameRep.value = repDefaultValues["eventName"];
  });

  const ltListRep = nodecg.Replicant("ltList", {
    defaultValue: repDefaultValues["ltList"],
  });
  const ltIdxRep = nodecg.Replicant("ltIdx", {
    defaultValue: repDefaultValues["ltIdx"],
  });
  if (ltListRep.value.length <= ltIdxRep.value) {
    ltIdxRep.value = 0;
  }

  nodecg.listenFor("nextIdx", () => {
    const len = ltListRep.value.length;
    const idx = Math.min(len - 1, ltIdxRep.value + 1);
    ltIdxRep.value = idx;
  });
  nodecg.listenFor("prevIdx", () => {
    const len = ltListRep.value.length;
    const idx = Math.max(0, Math.min(len - 1, ltIdxRep.value - 1));
    ltIdxRep.value = idx;
  });
  nodecg.listenFor("reloadJSON", () => {
    const ltlist = ltData.presenters;
    const idx = Math.min(ltIdxRep.value, ltlist.length - 1);
    ltListRep.value = ltlist;
    ltIdxRep.value = idx;
  });

  const commentsRep = nodecg.Replicant("comments", {
    defaultValue: repDefaultValues["comments"],
  });
  nodecg.listenFor("addComment", (comment: ZoomComment) => {
    commentsRep.value = [comment, ...commentsRep.value];
  });
  nodecg.listenFor("clearComments", () => {
    commentsRep.value = repDefaultValues["comments"];
  });

  //-----------------------------------------------------------
  const router = nodecg.Router();

  router.post("/webhook", (req, res) => {
    const zoomToken = req.headers["authorization"];
    if (!zoomToken || zoomToken !== WEBHOOK_VERIFICATION_TOKEN) {
      console.error("Invalid Request");
      res.status(401).send("Unauthorized");
      return;
    }

    switch (req.body.event) {
      case "meeting.chat_message_sent": {
        const info: ChatMessage = req.body.payload.object.chat_message;
        const comment: ZoomComment = {
          sender: info.sender_name,
          content: info.message_content,
        };

        nodecg.sendMessage("addComment", comment);
        res.json({
          message: "OK",
          status: 200,
        });
        break;
      }
      case "meeting.participant_joined": {
        const info: ParticipantJoinedInfo = req.body.payload.object.participant;
        const user_name = info.user_name;
        const user_id = info.user_id;
        const join_time = info.join_time;
        console.info(`\t${join_time}: ${user_name} (${user_id})`);
        res.json({
          message: "OK",
          status: 200,
        });
        break;
      }
      case "meeting.participant_left": {
        const info: ParticipantLeftInfo = req.body.payload.object.participant;
        const user_name = info.user_name;
        const user_id = info.user_id;
        const leave_time = info.leave_time;
        console.info(`\t${leave_time}: ${user_name} (${user_id})`);
        res.json({
          message: "OK",
          status: 200,
        });
        break;
      }
      case "endpoint.url_validation": {
        // const payload = req.body.payload;
        res.json({});
        break;
      }
      default: {
        console.error("\tUnexpected Event happend");
      }
    }
    res.status(200);
  });
  nodecg.mount(router);
};
