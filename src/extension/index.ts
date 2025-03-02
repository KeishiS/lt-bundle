import NodeCG from "nodecg/types";
import { WEBHOOK_VERIFICATION_TOKEN } from "../../env";
import {
  ParticipantJoinedInfo,
  ParticipantLeftInfo,
  ChatMessage,
} from "../zoomTypes";

module.exports = (nodecg: NodeCG.ServerAPI) => {
  const router = nodecg.Router();

  router.post("/webhook", (req, res) => {
    const zoomToken = req.headers["authorization"];
    if (!zoomToken || zoomToken !== WEBHOOK_VERIFICATION_TOKEN) {
      console.error("Invalid Request");
      res.status(401).send("Unauthorized");
      return;
    }

    console.info(`\teventType: ${req.body.event}`);
    switch (req.body.event) {
      case "meeting.chat_message_sent": {
        const info: ChatMessage = req.body.payload.object.chat_message;
        const sender = info.sender_name;
        const content = info.message_content;
        console.log(`\t${sender}: ${content}`);

        nodecg.sendMessage("receiveMessage", { sender, content });

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
