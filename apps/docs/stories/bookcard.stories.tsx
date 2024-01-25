import type { Meta, StoryObj } from "@storybook/react"
import {BookCardContainer, BookCardContent, BookCardDescription, BookCardHeading, BookCardImageWrapper, Rating } from "@ui-bookwise/ui";

type Story = StoryObj<typeof BookCardContainer>;

const meta: Meta<typeof BookCardContainer> = {
  component: BookCardContainer,
  title: "Book Card"
}

export default meta;

export const Primary: Story = {
  render: (props) => (
    <BookCardContainer {...props} variant="myBooks">
      <BookCardImageWrapper>
        <img src="/bookcard-image.png" width={108} height={152} />
      </BookCardImageWrapper>
      <BookCardContent>
        <div className="flex flex-col">
          <div className="flex justify-between mb-3">
            <span className="text-gray-300 text-sm">2 days ago</span>
            <Rating readonly={true} starsSize={16} value={4} />
          </div>
          <BookCardHeading author="J.R.R tolkien" title="The Hobbit" />
        </div>
        <BookCardDescription description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu" />
      </BookCardContent>
     </BookCardContainer>
  ),
  name: "My Books"
};

export const TrendingBooks: Story = {
  render: (props) => (
    <BookCardContainer {...props} variant="trendingBooks">
      <BookCardImageWrapper>
        <img src="/bookcard-image.png" width={64} height={92} />
      </BookCardImageWrapper>
      <BookCardContent>
        <BookCardHeading author="J.R.R tolkien" title="The Hobbit" />
        <Rating readonly={true} starsSize={16} value={4} />
      </BookCardContent>
     </BookCardContainer>
  ),
  name: "Trending Books"
};

type ContainerStory = StoryObj<typeof BookCardContainer>
export const Container: ContainerStory = {
  render: (props) => (
    <BookCardContainer {...props}>
      <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum dignissimos sint eos culpa necessitatibus id accusamus incidunt cum optio. Officia similique at laboriosam iure nemo, dolore earum ducimus perferendis!</p>
    </BookCardContainer>
  ),
  name: "BookCard Container",
  argTypes: {
    variant: {
      options: ['myBooks', 'trendingBooks'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'myBooks'
  }
};

type ImageWrapperStory = StoryObj<typeof BookCardImageWrapper>
export const ImageWrapper: ImageWrapperStory = {
  render: (props) => (
    <BookCardContainer>
      <BookCardImageWrapper {...props} />
    </BookCardContainer>

  ),
  name: "BookCard Image Wrapper",
  args: {
    children: <img src="/bookcard-image.png" width={108} height={152} />
  },
};

type HeadingStory = StoryObj<typeof BookCardHeading>
export const Heading: HeadingStory = {
  render: (props) => (
    <BookCardContainer>
      <BookCardContent>
        <BookCardHeading {...props} />
      </BookCardContent>
    </BookCardContainer>
  ),
  name: "BookCard Heading",
  args: {
    author: "J.R.R tolkien",
    title: "The Hobbit",
  }
};


type DescriptionStory = StoryObj<typeof BookCardDescription>
export const Description: DescriptionStory = {
  render: (props) => (
    <BookCardContainer>
      <BookCardDescription {...props} />
    </BookCardContainer>
  ),
  name: "BookCard Description",
  args: {
    description: "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh",
    wordLimit: 20
  }
};

