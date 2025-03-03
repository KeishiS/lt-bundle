import ltlist from "../ltlist.json";

export type ZoomComment = {
  sender: string;
  content: string;
};

export type Presenter = {
  name: string;
  title: string;
};

export type ReplicantMap = {
  eventName: string;
  ltList: Presenter[];
  ltIdx: number;
  comments: ZoomComment[];
};

export const repDefaultValues: ReplicantMap = {
  eventName: "LT Event #01",
  ltList: ltlist.presenters,
  ltIdx: 0,
  comments: [
    { sender: "主催者", content: "皆さん参加いただきありがとうございます！" },
  ],
};
