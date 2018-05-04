import Helmet from "react-helmet"

exports.onRenderBody = ( props, pluginOptions ) => {
    const { setHeadComponents, setHtmlAttributes, setBodyAttributes } = props
    console.log(props)
    const helmet = Helmet.renderStatic()
    setHtmlAttributes(helmet.htmlAttributes.toComponent())
    setBodyAttributes(helmet.bodyAttributes.toComponent())
    setHeadComponents([
        helmet.title.toComponent(),
        helmet.link.toComponent(),
        helmet.meta.toComponent(),
        helmet.noscript.toComponent(),
        helmet.script.toComponent(),
        helmet.style.toComponent(),
    ])
}