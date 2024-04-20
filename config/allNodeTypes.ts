import GetSheetValues from "@/components/nodes/appscript/sheets/GetSheetValues";
import NumberNode from "@/components/nodes/datatypes/NumberNode";
import TextNode from "@/components/nodes/datatypes/TextNode";

const allNodeTypes = {
  textNode: TextNode,
  numberNode: NumberNode,
  gasGetSheetValues: GetSheetValues,
};

export default allNodeTypes;
