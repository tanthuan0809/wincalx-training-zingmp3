// libs import
import React from "react";
import { Tabs } from "antd";

// components
import ListMVRank from "../../components/ListMVRank";

// style
import "./style.scss";

/**
 * ContentMVRank - content main
 */
const { TabPane } = Tabs;

const ContentMVRank = () => {
  return (
    <div className="content-mv-rank-wrapper">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Việt Nam" key="1">
          <ListMVRank />
        </TabPane>
        <TabPane tab="US-UK" key="2">
          <ListMVRank />
        </TabPane>
        <TabPane tab="K-Pop" key="3">
          <ListMVRank />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentMVRank;
