import { applyNodeChanges, applyEdgeChanges, Node, Edge } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";
import { GetSheetValuesData } from "@/components/nodes/appscript/sheets/GetSheetValues";
import { NumberNodeData } from "@/components/nodes/datatypes/NumberNode";
import { TextNodeData } from "@/components/nodes/datatypes/TextNode";

export interface StoreState {
  nodes: Node[];
  edges: Edge[];

  onNodesChange(changes: any): void;

  createNode(type: string): void;

  updateNode(id: string, data: Record<string, any>): void;

  onNodesDelete(deleted: any[]): void;

  onEdgesChange(changes: any): void;

  addEdge(data: Edge): void;

  onEdgesDelete(deleted: Edge[]): void;
}

const exampleStore = create<StoreState>((set, get) => ({
  nodes: [],
  edges: [],

  createNode(type) {
    const id = nanoid();

    switch (type) {
      case "textNode": {
        set({
          nodes: [
            ...get().nodes,
            { id, type, data: {} as TextNodeData, position: { x: 0, y: 0 } },
          ],
        });

        break;
      }

      case "numberNode": {
        set({
          nodes: [
            ...get().nodes,
            { id, type, data: {} as NumberNodeData, position: { x: 0, y: 0 } },
          ],
        });

        break;
      }

      case "gasGetSheetValues": {
        set({
          nodes: [
            ...get().nodes,
            {
              id,
              type,
              data: {} as GetSheetValuesData,
              position: { x: 0, y: 0 },
            },
          ],
        });

        break;
      }
    }
  },

  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id
          ? { ...node, data: Object.assign(node.data, data) }
          : node
      ),
    });
  },

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onNodesDelete(deleted) {
    set({
      nodes: get().nodes.filter(
        (node) => !deleted.some((d) => d.id === node.id)
      ),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = nanoid(6);
    const edge = { ...data, id };

    const sourceValue = get().nodes.find((node) => node.id === data.source)
      ?.data.value;
    const target = get().nodes.find((node) => node.id === data.target);

    if (target && sourceValue !== undefined) {
      set({
        nodes: get().nodes.map((node) =>
          node.id === data.target
            ? { ...node, data: { ...node.data, value: sourceValue } }
            : node
        ),
      });
    }

    set({ edges: [edge, ...get().edges] });
  },

  onEdgesDelete(deleted) {
    set({
      edges: get().edges.filter(
        (edge) => !deleted.some((d) => d.id === edge.id)
      ),
    });
  },
}));

export default exampleStore;
