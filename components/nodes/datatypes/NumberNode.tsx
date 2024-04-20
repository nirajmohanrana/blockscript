import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { memo, useState } from "react";
import { Handle, Position, NodeProps, Node, Connection } from "reactflow";

export interface NumberNodeData extends Node {
  value: number;
}

const NumberNode = ({ id, data }: NodeProps<NumberNodeData>) => {
  const [number, setNumber] = useState<number>(NaN);

  return (
    <Card key={id} className="w-36 min-h-4 text-sm rounded-sm">
      <p className="w-full py-1 px-2 border-b">Number</p>
      <div className="p-2">
        {!data.value && (
          <Input
            type="number"
            className="text-xs rounded-sm px-1 py-px h-7 nodrag"
            placeholder="Add a Number"
            value={isNaN(number) ? "" : number.toString()}
            onChange={(e) => {
              const parsedValue = parseInt(e.target.value);
              if (!isNaN(parsedValue)) {
                setNumber(parsedValue);
              }
            }}
          />
        )}
      </div>

      <Handle
        id="numberTarget"
        position={Position.Left}
        type="target"
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-4 !-left-0.5"
        isValidConnection={(connection: Connection) => {
          console.log("numberTarget");
          console.log(connection);
          return true;
        }}
      />

      <Handle
        id="numberSource"
        type="source"
        position={Position.Right}
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-3/4 !-right-0.5"
        isValidConnection={(connection: Connection) => {
          console.log("numberSource");
          console.log(connection);
          return true;
        }}
      />
    </Card>
  );
};

export default memo(NumberNode);
