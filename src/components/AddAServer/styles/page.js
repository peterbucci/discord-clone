import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 440px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  overflow: hidden;
`;

export const Header = styled.div`
  flex-grow: 0;
  padding: ${({ padding }) => padding ?? "24px 16px 0"};
  text-align: center;
  word-wrap: break-word;
  overflow: hidden;
`;

export const Title = styled.h1`
  all: unset;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.primary860};
`;

export const Subtitle = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.primary500};
`;

export const Close = styled.button`
  all: unset;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px;
  height: 26px;
  border-radius: 3px;
  box-sizing: content-box;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.5;
  cursor: pointer;
  z-index: 1000;
  &:hover svg path {
    fill: ${({ theme }) => theme.black};
  }
`;

export const Content = styled.div`
  position: relative;
  flex: 1 1 auto;
  margin: ${({ margin }) => margin ?? "24px 0 0 0"};
  padding: ${({ padding }) => padding ?? "0 16px 8px 16px"};
  height: ${({ height }) => height ?? "auto"};
  border-radius: 5px 5px 0 0;
  z-index: 0;
  overflow: hidden scroll;
`;

export const Option = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "8px"};
  padding: ${({ padding }) => padding ?? "0"};
  width: 100%;
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.backgroundModifierAccentLight}`};
  background-color: ${({ theme, background }) =>
    background ? theme[background] : theme.white};
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierHoverLight};
  }
`;

export const OptionIcon = styled.img`
  margin: ${({ margin }) => margin ?? "8px 8px 8px 16px"};
  filter: saturate(1);
  text-indent: -9999px;
`;

export const OptionText = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-overflow: ellipsis;
  color: ${({ theme, color }) => (color ? theme[color] : theme.primary600)};
  overflow: hidden;
`;

export const OptionTitleWrapper = styled.div``;

export const OptionSubtitle = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.primary600};
  overflow: hidden;
`;

export const OptionArrow = styled.img`
  margin-left: auto;
  margin-right: 16px;
  text-indent: -9999px;
`;

export const OptionHeader = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary500};
`;

export const ExamplesWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Example = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.primary860};
`;

export const Upload = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4px;
  color: ${({ theme }) => theme.primary500};
`;

export const UploadIconContainer = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  filter: saturate(1);
`;

export const UploadInput = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  font-size: 0px;
  opacity: 0;
  cursor: pointer;
`;

export const Form = styled.form``;

export const InputContainer = styled.div`
  margin-top: 24px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.primary500};
`;

export const Required = styled.span`
  padding-left: 4px;
  color: ${({ theme }) => theme.statusDanger};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  all: unset;
  padding: 10px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.primary200};
  color: ${({ theme }) => theme.primary600};
  transition: border-color 0.2s ease-in-out;
`;

export const GuidelinesText = styled.div`
  margin-top: 8px;
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.primary460};
`;

export const GuidelinesTextLink = styled.strong`
  color: ${({ theme }) => theme.blue430};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SkipQuestion = styled.div`
  margin-top: 18px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.primary500};
  text-align: center;
`;

export const SkipQuestionLink = styled.span`
  color: ${({ theme }) => theme.blue430};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.primary130};
  border-radius: 0 0 5px 5px;
  z-index: 1;
  overflow-x: hidden;
`;

export const FooterHeader = styled.h2`
  all: unset;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primary860};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const JoinAServerButton = styled.button`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 2px 16px;
  width: auto;
  height: 38px;
  min-width: 96px;
  min-height: 38px;
  background-color: ${({ theme }) => theme.primary430};
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.white};
  transition: background-color 0.17s ease, color 0.17s ease;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary500};
  }
`;

export const BackButton = styled.button`
  all: unset;
  margin-right: auto;
  padding: 2px 4px;
  width: auto;
  height: 38px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 16px;
  width: auto;
  height: 38px;
  min-width: 96px;
  min-height: 38px;
  background-color: ${({ theme }) => theme.brand500};
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.white};
  transition: background-color 0.17s ease, color 0.17s ease;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.brand560};
  }
  &:active {
    background-color: ${({ theme }) => theme.brand600};
  }
`;
