import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import exampleStore from "@/store/example";
import { memo, useState } from "react";
import { Handle, Position, NodeProps, Connection } from "reactflow";

export interface TextNodeData extends Node {
  value: string;
}

const TextNode = ({ id, data }: NodeProps<TextNodeData>) => {
  const { nodes } = exampleStore();

  return (
    <Card key={id} className="w-36 min-h-4 text-sm rounded-sm">
      <p className="w-full py-1 px-2 border-b">Text</p>
      <div className="p-2">
        <Input
          type="text"
          className="text-xs rounded-sm px-1 py-px h-7 nodrag"
          placeholder="Add a Text"
          value={data.value}
          onChange={(e) => {
            data.value = e.target.value;
          }}
        />
      </div>

      <Handle
        id="textTarget"
        type="target"
        isConnectableStart={false}
        position={Position.Left}
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-4 !-left-0.5"
      />

      <Handle
        id="textSource"
        type="source"
        position={Position.Right}
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-3/4 !-right-0.5"
        isValidConnection={(connection: Connection) => {
          const target = nodes.find((node) => node.id === connection.target);
          console.log(target?.data);
          return true;
        }}
      />
    </Card>
  );
};

export default memo(TextNode);
