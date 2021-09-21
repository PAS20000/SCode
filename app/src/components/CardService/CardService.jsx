
const CardSevice = ({ animation, title, sub1, sub2, sub3, sbu4, text1, text2, text3, text4 }) => {

    return (
        <article>
            <div>
                <div>
                    {animation}
                </div>
            </div>
            <h2>{title}</h2>
            <div>
                <h2>{sub1}</h2>
                <p>
                    {text1}
                </p>
            </div>
            <div>
                <h2>{sub2}</h2>
                <p>
                    {text2}
                </p>
            </div>
            <div>
                <h2>{sub3}</h2>
                <p>
                    {text3}
                </p>
            </div>
            <div>
                <h2>{sbu4}</h2>
                <p>
                    {text4}
                </p>
            </div>
        </article>
    )
}

export default CardSevice