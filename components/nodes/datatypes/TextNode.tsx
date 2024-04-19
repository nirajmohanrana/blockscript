import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

type NodeData = {
  value: string;
};

const TextNode = ({ id, data }: NodeProps<NodeData>) => {
  const isValidConnection = () => {
    const isValid = typeof data.value === "string";
    if (!isValid) {
      console.log("Connection is not valid");
    }
    return isValid;
  };

  return (
    <Card key={id} className="w-36 min-h-4 text-sm rounded-sm">
      <p className="w-full py-1 px-2 border-b">Text</p>
      <div className="p-2">
        {!data.value && (
          <Input
            type="text"
            className="text-xs rounded-sm px-1 py-px h-7"
            placeholder="Add a Text"
          />
        )}
      </div>

      <Handle
        position={Position.Left}
        type="target"
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-4 !-left-0.5"
        isValidConnection={isValidConnection}
      />

      <Handle
        position={Position.Right}
        type="source"
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-3/4 !-right-0.5"
      />
    </Card>
  );
};

export default memo(TextNode);
