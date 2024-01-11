import React from 'react'
import Introduction from './loaders/Introduction'
import Home from './screens/Home'

function Main() {

    const [intro, setIntro] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIntro(false)
        }, 10000)

        return () => clearTimeout()
    }, [])

    return (
        <>
            {
                intro ? <Introduction /> : <Home />
            }
        </>
    )
}

export default Main