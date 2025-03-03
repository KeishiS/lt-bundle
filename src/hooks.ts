import { useState, useEffect, useCallback } from "react";
import { ReplicantMap, repDefaultValues } from "./nodeCGTypes";

const useReplicant = <T extends keyof ReplicantMap>(
  name: T,
): [ReplicantMap[T] | undefined, (newvalue: ReplicantMap[T]) => void] => {
  const [rep] = useState(() =>
    nodecg.Replicant(name, { defaultValue: repDefaultValues[name] }),
  );
  const [value, setValue] = useState(rep.value);
  useEffect(() => {
    const handleChange = (newValue: ReplicantMap[T] | undefined) =>
      setValue(newValue);
    rep.on("change", handleChange);
    return () => {
      rep.removeListener("change", handleChange);
    };
  }, [rep]);
  return [value, useCallback((newValue) => (rep.value = newValue), [rep])];
};

export default useReplicant;
