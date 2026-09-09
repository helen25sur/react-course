export default function Log({ turns }) {
  return (
    <ol id="log">
      {
        turns.map(turn => {
          const { row, cell } = turn.square;
          return <li key={`${row}${cell}`}>{turn.player} selected {row}, {cell}</li>
        })
      }
    </ol>
  )
}