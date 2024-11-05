import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { routesEnum } from '../Routes';
import { Link } from './Link';

import { Button } from './Button';

const Rhino = styled.span`
  font-size: 20px;
`;

const RainbowBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.rainbowLight})`};
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <RainbowBackground>
      <FooterStyles>
        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          <ButtonContainer className="m-auto">
            <ButtonLink
              to={routesEnum.acknowledgementPage}
              className="cta-button"
            >
              <Button
                rainbow
                fullWidth
                width={400}
                label={
                  <FormattedMessage
                    defaultMessage="Become a validator {emoji}"
                    values={{
                      emoji: (
                        <Rhino>
                          <span role="img" aria-label="rhino">
                            🦏
                          </span>
                        </Rhino>
                      ),
                    }}
                  />
                }
              />
            </ButtonLink>
          </ButtonContainer>
        )}
      </FooterStyles>
    </RainbowBackground>
  );
};
