import { ApolloError } from '@apollo/client'
import { Modal, Spin } from 'antd'
import React from 'react'
import { IPerson } from '../StarWars/types'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalDetails } from './styles'
import ViewError from '../ViewError'
import stormtrooper from '../../assets/stormtrooper.jpg'
import CustomImage from '../CustomImage'

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
      width={300}
    >
      <ModalDetails>
        {loading && <Spin indicator={antIcon} />}

        {error && <ViewError>{error.message}</ViewError>}

        {data && (
          <>
            <CustomImage
              alt="imagem detalhe"
              src={stormtrooper}
              width={200}
              height={150}
              borderRadius="8px"
            />
            <Title level={5}>Nome: {data.person.name}</Title>
            <br />
            <div>
              <Text>Origem: {data.person.homeworld?.name ?? 'unknown'}</Text>
              <br />
              <Text>Espécie: {data.person.species?.name ?? 'unknown'}</Text>
              <br />
              <Text>Altura (cm): {data.person.height ?? 'unknown'}</Text>
              <br />
              <Text>Cor dos olhos: {data.person.eyeColor ?? 'unknown'}</Text>
            </div>
          </>
        )}
      </ModalDetails>
    </Modal>
  )
}

export default ModalPersonDetails
