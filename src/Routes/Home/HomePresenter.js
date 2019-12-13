import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
    padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => 
    loading ? null : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => movie.title)}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Playing">
                    {upcoming.map(movie => movie.title)}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Playing">
                    {popular.map(movie => movie.title)}
                </Section>
            )}
        </Container>
    );

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default HomePresenter;
