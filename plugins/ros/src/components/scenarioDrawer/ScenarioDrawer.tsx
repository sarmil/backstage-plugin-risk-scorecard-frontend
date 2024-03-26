import React, { useContext } from 'react';
import { Drawer } from '@material-ui/core';
import { useScenarioDrawerStyles } from './style';
import { ScenarioContext } from '../rosPlugin/ScenarioContext';
import { ScenarioDrawerEdit } from './edit/ScenarioDrawerEdit';
import { ScenarioDrawerView } from './view/ScenarioDrawerView';
import { ScenarioDrawerState } from '../utils/hooks';

export const ScenarioDrawer = () => {
  const { paperEdit, paperView } = useScenarioDrawerStyles();

  const { scenarioDrawerState, closeScenario } = useContext(ScenarioContext)!!;

  const isOpen = scenarioDrawerState !== ScenarioDrawerState.Closed;
  const editMode = scenarioDrawerState === ScenarioDrawerState.Edit;

  return (
    <Drawer
      classes={{ paper: editMode ? paperEdit : paperView }}
      variant="persistent"
      anchor="right"
      open={isOpen}
      onClose={closeScenario}
    >
      {editMode ? <ScenarioDrawerEdit /> : <ScenarioDrawerView />}
    </Drawer>
  );
};