import React, { FC } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

type Props = {
  data: any[],
  title: string,
  cols: string[],
}

const TableComponent: FC<Props> = ({ cols, title, data }) => {
  return (
    <TableContainer component={Paper}>
      <h3>{ title }</h3>
      <Table>
        <caption>{ title }</caption>
        <TableHead>
          <TableRow>
            { cols.map((col: string) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((d: any) => (
            <TableRow>
              {cols.map((col: any) => (
                <TableCell>{d[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent