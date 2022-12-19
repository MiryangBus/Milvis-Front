import React from 'react'

function Test() {
  const onChange = (e) => {
    if (e.nativeEvent.isComposing) {
      console.log(e.target.value);
    }
  }

  return (
    <div>
      <input
      onKeyUp={onChange}
      />
    </div>
  )
}

export default Test
