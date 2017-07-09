import * as React from 'react'
import { difference, range } from 'lodash'

import { Team } from 'utils/team'
import Table from 'components/table/Table'
import Header from 'components/table/Header'
import Body from 'components/table/Body'

import Cell from './GroupCell'

interface Props {
  maxTeams: number,
  groupLetter: string,
  teams: Team[],
  potNum: number,
  possible: boolean,
  airborneTeams: Team[],
}

const Group = ({
  maxTeams,
  groupLetter,
  teams,
  potNum,
  possible,
  airborneTeams,
}: Props) => {
  const nonAirborneTeams = difference(teams, airborneTeams)
  return (
    <Table>
      <Header>
        Group {groupLetter}
      </Header>
      <Body>
        {nonAirborneTeams.map((team, i) => (
          <Cell
            country={team.country}
            picked
          >
            {team.name}
          </Cell>
        ))}
        {range(nonAirborneTeams.length, maxTeams).map(i => (
          <Cell
            possible={i === potNum && possible}
            data-cellid={`${groupLetter}${i}`}
          />
        ))}
      </Body>
    </Table>
  )
}

export default Group
