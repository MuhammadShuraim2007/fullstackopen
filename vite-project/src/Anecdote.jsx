import { useState } from 'react'

const Anecdote = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVoteClick = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  return (
  <div style={{ marginTop: '2rem', borderTop: '1px solid #e5e5e5', paddingTop: '2rem' }}>
    <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#999', textTransform: 'uppercase', marginBottom: '1rem' }}>
      Anecdotes
    </p>

    <div style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem 1.75rem' }}>
      <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '0.5rem' }}>
        {anecdotes[selected]}
      </p>
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '1.25rem' }}>
        {votes[selected]} votes
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={handleVoteClick}>Vote</button>
        <button onClick={handleNextClick}>Next anecdote</button>
      </div>
    </div>

    <div>
      <h3 style={{ fontSize: '15px', fontWeight: '600', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Anecdote with most votes
      </h3>
      {maxVotes > 0 ? (
        <div style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '0.5rem' }}>
            {anecdotes[mostVotedIndex]}
          </p>
          <p style={{ fontSize: '13px', color: '#888' }}>
            {maxVotes} votes
          </p>
        </div>
      ) : (
        <p style={{ fontSize: '13px', color: '#888' }}>No votes yet</p>
      )}
    </div>
  </div>
)
}

export default Anecdote