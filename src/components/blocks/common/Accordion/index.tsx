'use client';

import { Heading } from '@radix-ui/themes';

import {
  AccordionRootWrap,
  AccordionItemContainer,
  AccordionHeaderWrap,
  AccordionTriggerContainer,
  AccordionChevronWrap,
  AccordionContentContainer,
} from './styled';

interface ICustomAccoridon {
  title?: string;
  value: string;
  children?: React.ReactNode;
  collapsible?: boolean;
  disabled?: boolean;
  itemDisabled?: boolean;
  headingSize?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
}

function CustomAccordion({
  title = 'Is it accessible?',
  children = 'Yes. It adheres to the WAI-ARIA design pattern.',
  value = 'item-1',
  collapsible = true,
  disabled = false,
  itemDisabled = false,
  headingSize = '7',
}: ICustomAccoridon) {
	return (
    <AccordionRootWrap type='single' defaultValue={value} collapsible={collapsible} disabled={disabled}>
      <AccordionItemContainer value={value} disabled={itemDisabled}>
        <AccordionHeaderWrap asChild>
          <AccordionTriggerContainer>
            <Heading size={headingSize} weight='light'>{title}</Heading>
            <AccordionChevronWrap aria-hidden />
          </AccordionTriggerContainer>
        </AccordionHeaderWrap>
        <AccordionContentContainer>{children}</AccordionContentContainer>
      </AccordionItemContainer>
    </AccordionRootWrap>
  );
}

export default CustomAccordion;
