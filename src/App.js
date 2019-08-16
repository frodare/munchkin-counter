import React, { useState } from 'react'

import Peer from 'peerjs'

import './App.css'

const useCounter = () => {
  const [count, setCount] = useState(1)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(Math.max(count - 1, 1))
  return [count, increment, decrement]
}

const openRoom = () => {
  console.log('starting')

  const peer = new Peer('8lu3frm45j300000')

  peer.on('open', () => {
    console.log('id', peer.id, peer)
  })

  peer.on('error', err => console.log('error', err))

  peer.on('connection', conn => {
    // setConnections(prevState => [...prevState, conn])
    console.log('conn', conn)

    // We want to immediately send the newly connected peer the current data.
    // conn.on('open', () => {
    //   conn.send(stateRef.current)
    // })
  })
}

openRoom()

// const Connect = ({ id }) => {
//   const [state, isConnected, error] = useReceivePeerState(id);
//   return <pre>{JSON.stringify({ state, isConnected, error })}</pre>
// }

const Player = () => {
  const [name, setName] = useState('')
  const [level, addLevel, removeLevel] = useCounter()
  // const [state, setState, brokerId, connections, error] = usePeerState({ name: 'test' })
  return (
    <div>
      {/* <pre>{JSON.stringify({ state, setState, brokerId, connections, error })}</pre> */}
      {/* <div><input value={state.name} onChange={ev => setState({ name: ev.target.value })} /></div> */}
      <div>Level: {level}</div>
      <div>
        <button onClick={removeLevel}>down</button>
        <button onClick={addLevel}>up</button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Player />
    </div>
  )
}

export default App
