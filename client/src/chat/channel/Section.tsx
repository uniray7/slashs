import React from 'react';
import styled from 'react-emotion';

interface StyledSectionProps {
  first: boolean;
}

const StyledSection = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: ${(props: StyledSectionProps) =>
    props.first ? 'none' : '1px solid #333333'};
`;

const StyledTitle = styled('div')`
  font-weight: bold;
  padding: 5px 16px;
  font-size: 14px;
`;

const StyledMember = styled('div')`
  padding: 4px 20px;
  font-size: 14px;
`;

interface Member {
  name: string;
}

interface SectionProps {
  first: boolean;
  title?: string;
  members: Member[];
}

export default class Section extends React.PureComponent<SectionProps> {
  static defaultProps = {
    first: false
  };

  render() {
    const { title, members, first } = this.props;
    return (
      <StyledSection first={first}>
        {title && <StyledTitle>{title}</StyledTitle>}
        {members.map((member: { name: string }) => (
          <StyledMember>{member.name}</StyledMember>
        ))}
      </StyledSection>
    );
  }
}
