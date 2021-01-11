import { Tabs } from 'antd';
import React, { Component } from 'react'
import { Data } from './dashboard-data';


const { TabPane } = Tabs;

export default class Dashboard extends Component {
  state = {
    tabPosition: 'left'
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
      <div className = 'dashboard-nav'>
       <div className = 'main-dash'>
        <Tabs tabBarStyle = {{color: 'black !important'}} tabPosition={tabPosition}>
         {/* <TabPane tab = { }>
        
         </TabPane> */}
          <TabPane tab={<span className = 'dashboard'><i className="fas fa-shapes fa-2x mr-4"></i><span className = 'dash'>Dashboard</span></span>} key="1">
              <Data/>
          </TabPane>
          <TabPane tab={<span className = ''><i className="fas fa-chart-line fa-2x mr-4 "></i> Stats</span>} key="2">
            No Content for Stats
          </TabPane>
          <TabPane tab={<span className = ''><i className="far fa-star fa-2x mr-4 "></i> Ratings</span>} key="3">
            No Content for Ratings
          </TabPane>
          <TabPane tab={<span className = ''><i className="fas fa-subway fa-2x mr-4 "></i> Matches</span>} key="4">
            No Content for Matches
          </TabPane>
        </Tabs>
        </div>
        </div>
     
     <div className = 'mob-dash'>
        <Tabs tabBarStyle = {{color: 'black !important'}} tabPosition={'bottom'}>
          <TabPane tab={<span className = 'dashboard'><i className="fas fa-shapes fa-2x mr-4"></i><span className = 'dash'>Dashboard</span></span>} key="1">
              <Data/>
          </TabPane>
          <TabPane tab={<span className = ''><i className="fas fa-chart-line fa-2x mr-4 "></i> Stats</span>} key="2">
            No Content for Stats
          </TabPane>
          <TabPane tab={<span className = ''><i className="far fa-star fa-2x mr-4 "></i> Ratings</span>} key="3">
            No Content for Ratings
          </TabPane>
          <TabPane tab={<span className = ''><i className="fas fa-subway fa-2x mr-4 "></i> Matches</span>} key="4">
            No Content for Matches
          </TabPane>
        </Tabs>
                </div>
      </>
    );
  }
}

