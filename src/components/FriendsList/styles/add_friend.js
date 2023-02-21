import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeadOne = styled.header`
  margin-bottom: 1px;
  padding: 20px 30px;
  border-bottom: ${({ theme }) => `1px solid
    ${theme.backgroundModifierAccent}`};
`;

export const HeadOneTitle = styled.h2`
  margin: 0 0 8px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const SearchForm = styled.form``;

export const SearchFormText = styled.div`
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.interactiveNormal};
`;

export const SearchbarOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 0 12px;
  height: 48px;
  border: ${({ alert, theme }) =>
    `1px solid ${
      alert?.props.success
        ? theme.statusGreen600
        : alert
        ? theme.statusDanger
        : theme.textInputBorder
    }`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundTertiary};
`;

export const SearchbarInnerWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 4px 0;
  margin-right: 16px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const SearchbarInput = styled.input`
  all: unset;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 40px;
  z-index: 2;
`;

export const SearchbarInputUnderlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.interactiveMuted};
  z-index: 1;
`;

export const SearchbarButton = styled.button`
  all: unset;
  flex-shrink: 0;
  padding: 2px 16px;
  height: 28px;
  width: auto;
  min-width: 60px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.brand};
  line-height: 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover:enabled {
    background-color: ${({ theme }) => theme.brand560};
  }
  &:active:enabled {
    background-color: ${({ theme }) => theme.brand600};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Alert = styled.div`
  margin-top: 8px;
  line-height: 20px;
  color: ${({ success, theme }) =>
    success ? theme.textPositive : theme.textDanger};
  font-size: 14px;
  font-weight: 400;
`;

export const HeadTwo = styled.div`
  padding: 20px 30px;
`;

export const HeadTwoTitle = styled.h2`
  margin: 0;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ExploreButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  column-gap: 32px;
  row-gap: 20px;
  padding: 0 30px;
`;

export const ExploreButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  padding: 1px 6px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: ${({ theme }) => `1px solid ${theme.backgroundModifierAccent}`};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.backgroundModifierAccent};
  }
`;

export const ExploreButtonImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.statusGreen600};
  border-radius: 8px;
`;

export const ExploreButtonText = styled.div`
  line-height: 20px;
  color: ${({ theme }) => theme.textNormal};
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterImg = styled.div`
  margin-bottom: 40px;
  flex: 0 1 auto;
  width: 100%;
  height: 100%;
  max-width: 376px;
  max-height: 162px;
  background-image: url("/assets/add_friends_footer.svg");
  background-size: 100% 100%;
`;

export const FooterText = styled.div`
  flex: 0 1 auto;
  color: ${({ theme }) => theme.textMuted};
  font-size: 15px;
  line-height: 20px;
`;
