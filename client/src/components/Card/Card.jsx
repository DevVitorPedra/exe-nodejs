import React from 'react'
import { StyledCard, StyledID, StyledText, StyledTitle } from './styledCard'

export default function Card(props) {
    return (
        <StyledCard>
            <StyledID>{props.id}</StyledID>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.age}</StyledText>
            <StyledText>{props.job}</StyledText>
            <StyledText>{props.state}</StyledText>
        </StyledCard>
    )
}
