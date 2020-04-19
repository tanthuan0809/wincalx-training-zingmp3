// libs import
import React from "react";
import { Tabs } from "antd";

// components
import ListMVRank from "../../components/ListMVRank";
import Top1MV from "../../components/Top1MV";

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
          <Top1MV />
          <ListMVRank />
        </TabPane>
        <TabPane tab="US-UK" key="2">
          <Top1MV />
          <ListMVRank />
        </TabPane>
        <TabPane tab="K-Pop" key="3">
          <Top1MV />
          <ListMVRank />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentMVRank;
