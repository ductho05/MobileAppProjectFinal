import React from 'react'
import TabHomeStack from './components/routersRender/TabHomeStack'
import Introduction from './loaders/Introduction'


function Main() {

    const [intro, setIntro] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIntro(false)
        }, 5000)

        return () => clearTimeout()
    }, [])

    return (
        <>
            {
                intro ? <Introduction /> : <TabHomeStack />
            }
        </>
    )
}

export default Main