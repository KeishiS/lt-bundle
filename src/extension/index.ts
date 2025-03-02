import NodeCG from "nodecg/types";
import { createHmac } from "crypto";
import { WEBHOOK_SECRET_TOKEN, WEBHOOK_VERIFICATION_TOKEN } from "../../env";

module.exports = (nodecg: NodeCG.ServerAPI) => {
  const router = nodecg.Router();

  router.post("/webhook", (req, res) => {
    const zoomToken = req.headers["authorization"];
    if (!zoomToken || zoomToken !== WEBHOOK_VERIFICATION_TOKEN) {
      console.error("Invalid Request");
      res.status(401).send("Unauthorized");
      return;
    }

    const message = `v0:${req.headers["x-zm-request-timestamp"]}:${JSON.stringify(req.body)}`;
    const hashForVerify = createHmac("sha256", WEBHOOK_SECRET_TOKEN)
      .update(message)
      .digest("hex");
    const signature = `v0=${hashForVerify}`;
    if (req.headers["x-zm-signature"] !== signature) {
      console.error("Failed Verification");
      res.status(401).send("Unauthorized");
      return;
    }

    res.status(200);
    res.send({
      message: "OK",
      status: 200,
    });
  });
  nodecg.mount(router);
};
