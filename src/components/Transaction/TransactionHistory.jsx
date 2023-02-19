import PropTypes from 'prop-types';

export function TransactionHistory({items}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({id, type, amount, currency}) => <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
};