import { Meta, StoryObj } from '@storybook/react';
import FullWidthButton from './FullWidthButton';

const meta = {
  // 문서 제목
  title: 'FullWidthButton',
  // 자동으로 문서 생성
  tags: ['autodocs'],
  component: FullWidthButton,
} satisfies Meta<typeof FullWidthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    text: '결제하기',
    color: 'black',
  },
};

export const Green: Story = {
  args: {
    text: '이 거래글 링크 복사하기',
    color: 'green',
  },
};
