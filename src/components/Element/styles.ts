import styled from "styled-components";
type Props = {
    done:boolean;
}
export const Container = styled.div(( { done }:Props ) => (
        `
        border:1px solid grey;
        padding:5px;
        margin-bottom:5px;
        border-radius:10px;
        label{
            text-decoration: ${done && 'line-through'};
        }
    `
    )
)