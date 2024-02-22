import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { ROS } from '../utils/interfaces';
import { InfoCard } from '@backstage/core-components';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { ScenarioTableRow } from './ScenarioTableRow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface ScenarioTableProps {
  ros: ROS;
  addScenario: () => void;
  deleteRow: (id: string) => void;
  editRow: (id: string) => void;
}

export const ScenarioTable = ({
  ros,
  addScenario,
  deleteRow,
  editRow,
}: ScenarioTableProps) => {
  return (
    <InfoCard title="Risikoscenarioer">
      <Button
        startIcon={<AddCircleOutlineIcon />}
        variant="text"
        color="primary"
        onClick={addScenario}
        style={{ textTransform: 'none', padding: '1rem' }}
      >
        Legg til scenario
      </Button>
      <TableContainer component={Paper}>
        <Table style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <TableHead>
            <TableRow
              style={{
                borderBottom: '1px solid white',
                borderTop: '1px solid white',
              }}
            >
              <TableCell />
              <TableCell
                style={{ paddingTop: '0.1rem', paddingBottom: '0.1rem' }}
              >
                <Typography variant="subtitle1">
                  <b>Beskrivelse</b>
                </Typography>
              </TableCell>
              <TableCell
                style={{ paddingTop: '0.1rem', paddingBottom: '0.1rem' }}
              >
                <Typography variant="subtitle1">
                  <b>Risiko</b>
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {ros.scenarier.map(scenario => (
              <ScenarioTableRow
                key={scenario.ID}
                scenario={scenario}
                editRow={editRow}
                deleteRow={deleteRow}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </InfoCard>
  );
};