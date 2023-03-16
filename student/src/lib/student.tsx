import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StudentProps {}

const StyledStudent = styled.div`
  color: pink;
`;

export function Student(props: StudentProps) {
  return (
    <StyledStudent>
      <h1>Welcome to Student!</h1>
    </StyledStudent>
  );
}

export default Student;
