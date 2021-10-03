import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import Loading from "../components/Loading"
import './YaniList.scss'

const loadMD = (setMarkdown: Function, setIsLoading: Function): void => {
    const postName = "post" //このファイル実行と同時に読み込み、毎秒のロードを回避するため
    import(`./${postName}.md`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => {
                    setMarkdown(res)
                    setIsLoading(false)
                })
        })
}


function YaniList() {
    const [markdown, setMarkdown] = useState<string>('') //isLoading無しならここにsetTimeout時間までの初期表示書いとく
    const [isLoading, setIsLoading] = useState<boolean>(true) //if文表示画面条件遷移用

    useEffect(() => {
        setTimeout(() => { // 指定時間(ms)後に実行
            loadMD(setMarkdown, setIsLoading)
        }, 1500);
    }, [])

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="mdWrap">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default YaniList