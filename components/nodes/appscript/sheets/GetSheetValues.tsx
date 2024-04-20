import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { memo } from "react";
import { Handle, Position, NodeProps, Node } from "reactflow";

export interface GetSheetValuesData extends Node {
  startRow: number;
  startColumn: number;
  numRows: number;
  numColumns: number;
}

const GetSheetValues = ({ id, data }: NodeProps<GetSheetValuesData>) => {
  const isValidConnection = (value: number) => {
    const isValid = typeof value === "number";
    if (!isValid) {
      console.log("Connection is not valid");
    }
    return isValid;
  };

  return (
    <Card key={id} className="w-48 min-h-4 text-sm rounded-sm">
      <p className="w-full py-1 px-2 border-b">Get Sheet Values</p>
      <div className="p-2 grid grid-cols-4 gap-2">
        {!data.startRow && (
          <Input
            type="number"
            className="text-xs rounded-sm px-1 py-px h-7 nodrag"
            placeholder="0"
          />
        )}

        {!data.startColumn && (
          <Input
            type="number"
            className="text-xs rounded-sm px-1 py-px h-7 nodrag"
            placeholder="0"
          />
        )}

        {!data.numRows && (
          <Input
            type="number"
            className="text-xs rounded-sm px-1 py-px h-7 nodrag"
            placeholder="0"
          />
        )}

        {!data.numColumns && (
          <Input
            type="number"
            className="text-xs rounded-sm px-1 py-px h-7 nodrag"
            placeholder="0"
          />
        )}
      </div>

      {/* Input Handles */}
      <Handle
        id="startRow"
        position={Position.Left}
        type="target"
        className="!h-2 !rounded-none !w-px !border-none !bg-primary !top-4 !-left-0.5"
        isValidConnection={() => isValidConnection(data.startRow)}
      />

      <Handle
        id="startColumn"
        type="target"
        position={Position.Left}
        className="!h-2 !rounded-none !w-px !border-none !bg-primary !top-8 !-left-0.5"
        isValidConnection={() => isValidConnection(data.startColumn)}
      />

      <Handle
        id="numRows"
        type="target"
        position={Position.Left}
        className="!h-2 !rounded-none !w-px !border-none !bg-primary !top-12 !-left-0.5"
        isValidConnection={() => isValidConnection(data.numRows)}
      />

      <Handle
        id="numColumns"
        type="target"
        position={Position.Left}
        className="!h-2 !rounded-none !w-px !border-none !bg-primary !top-16 !-left-0.5"
        isValidConnection={() => isValidConnection(data.numColumns)}
      />

      {/* Output Handles */}
      <Handle
        id="gasGetSheetValuesSource"
        type="source"
        position={Position.Right}
        className="!h-5 !rounded-none !w-px !border-none !bg-primary !top-3/4 !-right-0.5"
      />
    </Card>
  );
};

export default memo(GetSheetValues);
