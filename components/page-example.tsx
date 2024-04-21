"use client";

import React from "react";
import Balancer from "react-wrap-balancer";

import ReactFlow, {
  Background,
  DefaultEdgeOptions,
  FitViewOptions,
  Node,
  Panel,
} from "reactflow";
import allNodeTypes from "@/config/allNodeTypes";
import { shallow } from "zustand/shallow";
import exampleStore, { StoreState } from "@/store/example";
import ExampleTable from "./example-table";

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const PageExample = () => {
  const selector = (store: StoreState) => ({
    nodes: store.nodes,
    edges: store.edges,
    onNodesChange: store.onNodesChange,
    onNodesDelete: store.onNodesDelete,
    onEdgesChange: store.onEdgesChange,
    onEdgesDelete: store.onEdgesDelete,
    addEdge: store.addEdge,
    addTextNode: () => store.createNode("textNode"),
    addNumberNode: () => store.createNode("numberNode"),
    addGasGetSheetValues: () => store.createNode("gasGetSheetValues"),
  });

  const store = exampleStore(selector, shallow);

  return (
    <section id="example" className="w-full pt-16">
      <Balancer className="py-2">
        Here&apos;s an example of sending marks to all students
      </Balancer>

      <div className="w-full flex items-center h-80 py-4 gap-2">
        <div className="w-1/2 h-full bg-secondary">
          <ReactFlow
            nodes={store.nodes}
            edges={store.edges}
            onNodesChange={store.onNodesChange}
            onNodesDelete={store.onNodesDelete}
            onEdgesChange={store.onEdgesChange}
            onEdgesDelete={store.onEdgesDelete}
            onConnect={store.addEdge}
            fitView
            fitViewOptions={fitViewOptions}
            defaultEdgeOptions={defaultEdgeOptions}
            nodeTypes={allNodeTypes}
            proOptions={{ hideAttribution: true }}
          >
            <Panel className={"space-x-4"} position="top-right">
              <button
                className={"px-2 py-1 rounded bg-white shadow"}
                onClick={store.addTextNode}
              >
                Add Osc
              </button>
              <button
                className={"px-2 py-1 rounded bg-white shadow"}
                onClick={store.addNumberNode}
              >
                Add Amp
              </button>
            </Panel>
            <Background />
          </ReactFlow>
        </div>
        <div className="w-1/2 h-full bg-secondary"></div>
      </div>

      <ExampleTable />
    </section>
  );
};

export default PageExample;
