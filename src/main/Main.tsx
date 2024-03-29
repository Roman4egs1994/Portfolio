
import style from './Main.module.scss'
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";
import {ReactTypingEffectText} from "../common/componets/typingText/ReactTypingEffect";
import React from 'react'




export const Main = () => {

    const iconStyle = {
        display: "block",
        position: 'absolute',
        right: '0',
        bottom: '0'
    }
    const styleLi = {
        paddingBottom: '10px'
    }

    const textTyping = ["React developer.", "Frontend developer."]

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.containerCenter}>
                    <div className={style.textCenter}>
                        <h1 className={style.name}>
                            Roman Moisidi
                        </h1>
                        <h4 className={style.headLine}>
                            I’m a
                            <span className={style.singleHeadLine}>
                                <ReactTypingEffectText
                                    text={textTyping}
                                    speed={200}
                                    eraseSpeed={200}
                                    eraseDelay={5000}
                                    typingDelay={500}
                                />
                            </span>
                        </h4>
                    </div>

                    <div className={style.fixedBlock}>
                        <IconSocialNetwork style={iconStyle} styleLi={styleLi}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

