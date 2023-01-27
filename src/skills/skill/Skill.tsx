import React from 'react';
import styled from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}


export const Skill: React.FC<SkillPropsType> = (props) => {
    const {
        title,
        description,
    } = props


    return (
        <div className={styled.skill}>
            <div className={styled.icon}>
                icon
            </div>
            <div className={styled.description}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
};
