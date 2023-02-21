import PropTypes from 'prop-types';
import { Table, TableHead, ColumnTitle, TableCell } from './Transaction.styled';

export function TransactionHistory({items}){
    return (
        <Table>
            <TableHead>
                <tr>
                    <ColumnTitle>Type</ColumnTitle>
                    <ColumnTitle>Amount</ColumnTitle>
                    <ColumnTitle>Currency</ColumnTitle>
                </tr>
            </TableHead>
            <tbody>
            {items.map(({id, type, amount, currency}) => <TableCell key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </TableCell>)}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
};