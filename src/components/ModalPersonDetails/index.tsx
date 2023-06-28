import { ApolloError } from '@apollo/client'
import { Modal, Spin } from 'antd'
import React from 'react'
import { IPerson } from '../StarWars/types'
import Title from 'antd/es/typography/Title'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalDetails } from './styles'
import ViewError from '../ViewError'
import Image from 'next/image'
import stormtrooper from '../../assets/stormtrooper.jpg'

interface IModalPerson {
  Close: () => void
  open: boolean
  loading: boolean
  error: ApolloError | undefined
  data: IPerson | undefined
}

const ModalPersonDetails: React.FC<IModalPerson> = ({
  data,
  error,
  loading,
  open,
  Close
}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  return (
    <Modal
      onCancel={Close}
      aria-labelledby="simple-dialog-title"
      open={open}
      footer={null}
    >
      <ModalDetails>
        {loading && <Spin indicator={antIcon} />}

        {error && <ViewError>{error.message}</ViewError>}

        {data && (
          <>
            <Image alt="imagem detalhe" src={stormtrooper} />
            <Title level={5}>Nome</Title>
            <Title level={4}>{data.person.name}</Title>
            <br />
            <div>
              <Title level={5}>Origem</Title>
              <Title level={5}>
                {data.person.homeworld?.name ?? 'unknown'}
              </Title>
            </div>
            <br />
            <div>
              <Title level={5}>Espécie</Title>
              <Title level={5}>{data.person.species?.name ?? 'unknown'}</Title>
            </div>
          </>
        )}
      </ModalDetails>
    </Modal>
  )
}

export default ModalPersonDetails
