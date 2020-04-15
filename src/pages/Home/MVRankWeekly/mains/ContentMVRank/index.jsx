// libs import
import React from "react";
import { Tabs } from "antd";

// components

// style
import "./style.scss";

/**
 * ContentMVRank - content main
 */
const { TabPane } = Tabs;

const ContentMVRank = () => {
  return (
    <div className="content-mv-rank-wrapper">
      <Tabs type="card">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentMVRank;
