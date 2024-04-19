import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Handle, Position } from "reactflow";

const StringNode = () => {
  const [isConnteted, setIsConnected] = useState<boolean>(false);

  const transmit = (params: any) => {
    setIsConnected(true);
    let target = getNode(params.target);
    target.data.execute(target, componentValue);
  };

  return (
    <Card>
      <div className="flex gap-2">
        <Label htmlFor="text">Email</Label>
        <Input type="text" id="text" placeholder="Add a text" />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        onConnect={(params) => transmit(params)}
      />
    </Card>
  );
};

export default StringNode;
