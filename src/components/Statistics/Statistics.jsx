import PropTypes from 'prop-types';
import { StatTable, Title, StatList, StatItem, Label, Percentage} from './Statistics.styled';

export function Statistics({title, stats}) {
    return  (<StatTable>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(({id, label, percentage}) => <StatItem key={id}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </StatItem>)}
    </StatList>
  </StatTable>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}