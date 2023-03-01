import Image from "next/image";
import { useContext } from "react";
import { EventContext } from "../contexts/event-context";
import { Address } from "./address";
import LevelName from "./level-name";

export type EventProps = {
  type: "LevelUp" | "Miaowed";
  data: Record<string, any>;
};

export const Event: React.FC<EventProps> = ({ type, data }) => {
  const level = data.level.toNumber() as 1 | 2 | 3;

  return (
    <div className="border border-neutral-700 rounded-lg flex items-center w-full leading-none">
      <div className="shrink-0 h-16">
        <Image
          className="rounded-l-lg"
          width={64}
          height={64}
          alt=""
          src={`/events/${type}${type === "LevelUp" ? `_${level}` : ""}.png`}
        />
      </div>
      <div className="space-y-2 font-semibold overflow-hidden px-4">
        {type === "LevelUp" && (
          <>
            <p className="text-gray-500 truncate">
              <Address address={data.account} />
            </p>
            <p className="truncate">
              {level === 1 ? "claimed a" : "leveled up to"}{" "}
              <LevelName level={level} />
            </p>
          </>
        )}
        {type === "Miaowed" && (
          <>
            <p className="text-gray-500 truncate">
              <Address address={data.attacker} />
            </p>
            <p className="truncate">
              destroyed{" "}
              <span className="text-sm text-gray-500">
                <Address address={data.victim} />
              </span>{" "}
              <LevelName level={level} />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const events = useContext(EventContext);

  return (
    <div className="my-20 flex flex-col items-center max-w-sm w-full">
      <h2
        className="font-bold text-3xl leading-none !bg-clip-text text-transparent"
        style={{
          background:
            "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
        }}
      >
        Game events
      </h2>
      <div className="space-y-2 mt-6 w-full">
        {events && events?.length > 0 ? (
          events?.map((e) => (
            <Event
              key={`${e.transaction.transactionHash}_${e.transaction.logIndex}`}
              type={e.eventName as EventProps["type"]}
              data={e.data}
            />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default Events;