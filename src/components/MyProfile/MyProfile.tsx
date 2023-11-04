'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './myprofile.module.scss';
import cl from 'classnames';
import Button from '../Button/Button';

type Inputs = {
  name: string;
  secondName: string;
  age: number;
};

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(JSON.stringify(data)).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <div className={cl(styles.formContainer, 'containerMain')}>
      <h1 className={styles.title}>Личный кабинет</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="profile"
        data-netlify="true"
        method="POST"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="profile" value="my profile" />
        <input
          className={styles.field}
          placeholder="*Имя"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span className={styles.requiredField}>Это обязательное поле</span>
        )}

        <input
          className={styles.field}
          placeholder="Фамилия"
          {...register('secondName')}
        />

        <input
          className={styles.field}
          placeholder="Возраст"
          type="number"
          {...register('age')}
        />

        <div className={styles.button}>
          <Button text={'Отправить запрос'} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
