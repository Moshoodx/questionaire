"use client"

import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  type ModalProps,
  Text
} from '@chakra-ui/react'

type Props = {
  title: string
  description?: string | React.ReactNode
  children?: React.ReactNode
  isOpen?: boolean
  handleOnClose?: () => void
  handleOnTrigger?: (value: boolean) => void
  proceed?: (arg: any) => Promise<void> | void
  buttonDisabled?: boolean
  proceedButtonText?: string
  showFooter?: boolean
  proceedRightButtonIcon?: React.JSX.Element
  cancelButton?: React.JSX.Element | null
  titleColor?: string
  isProcessing?: boolean
  hideModalHeader?: boolean
} & Partial<ModalProps>

export function ModalComponent({
  title,
  description,
  children,
  isOpen,
  handleOnClose,
  proceed,
  buttonDisabled,
  proceedButtonText,
  showFooter = true,
  cancelButton = undefined,
  isProcessing,
  hideModalHeader = false,
  ...args
}: Props): React.JSX.Element {
  return (
    <>
      <Modal {...args} isOpen={Boolean(isOpen)} onClose={() => handleOnClose?.()}>
        <ModalOverlay />
        <ModalContent w={{ base: "90%", md: "100%" }}>
          {<ModalHeader>
            {!hideModalHeader && <>
              {title !== undefined && <Text as="h3" color={args.titleColor} fontWeight={600} fontSize={{ base: 20, sm: 24 }}>
                {title}
              </Text>}
              {description !== undefined && (
                <Text as={'h6'} fontSize={'md'} fontWeight={400} opacity={1}>
                  {description}
                </Text>
              )}
            </>}
          </ModalHeader>}
          {!hideModalHeader && <ModalCloseButton onClick={handleOnClose || args.onClose} _hover={{ bg: `var(--primary-color)` }} />}
          <ModalBody>{children}</ModalBody>

          {showFooter && <ModalFooter>
            <Button
              isLoading={isProcessing}
              bg={`var(--secondary-color)`}
              color={`var(--primary-color)`}
              mr={3}
              onClick={proceed}
              fontSize={'md'}
              fontWeight={500}
              _hover={{
                bg: `var(--fourth-color)`
              }}
              paddingTop={isProcessing ? undefined : undefined}
              rightIcon={args.proceedRightButtonIcon}
              disabled={buttonDisabled}
              borderRadius={8}
            >
              {proceedButtonText ?? 'Proceed'}
            </Button>
            {cancelButton !== null && <Button
              onClick={handleOnClose || args.onClose}
              variant="ghost"
              fontSize={'md'}
              fontWeight={500}
              color={`var(--primary-font-color)`}
              bg={`var(--primary-color)`}
              _hover={{
              }}
              disabled={buttonDisabled}
              borderRadius={8}
            >
              Cancel
            </Button>}
          </ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  )
}
