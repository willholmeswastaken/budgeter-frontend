import React, { useState, useRef } from 'react';
import { Box, Button, Form, FormField, Heading, Layer, Text, TextInput } from 'grommet';
import { Currency, Deploy, Money } from 'grommet-icons';
import SyncLoader from 'react-spinners/SyncLoader';
import { CalculateBudget } from '../utils';

const formAnimation = { type: 'fadeIn', duration: 1500 };
const defaultAccountFormErrors = { name: null, email: null, password: null };

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [monthlyIncome, setMonthlyIncome] = useState(undefined);
  const [allocations, setAllocations] = useState({
    spending: 0,
    savings: 0,
    bills: 0,
  });
  const [accountFormErrors, setAccountFormErrors] = useState(defaultAccountFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(true);

  const onMonthlyIncomeUpdated = (e) => {
    setMonthlyIncome(e.target.value);
    setAllocations(CalculateBudget(e.target.value));
  };

  const accountFormStep = (
    <Box animation={formAnimation} height="medium" width="medium">
      <Form
        onValidate={(v) => setAccountFormErrors({ ...accountFormErrors, ...v.errors })}
        validate="blur"
      >
        <FormField
          label="Name"
          name="name"
          required
          error={accountFormErrors.name ? 'Please enter a valid first name' : undefined}
          validate={[{ regexp: /^[a-z]/i }]}
          onChange={(e) => setName(e.target.value)}
        />

        <FormField
          label="Email:"
          name="email"
          type="email"
          help="An example would be will@willholmes.dev"
          required
          error={accountFormErrors.email ? 'Please enter a valid email address' : undefined}
          validate={[
            { regexp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
          ]}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          label="Password:"
          name="password"
          type="password"
          required
          help="Password must have: 1 lowercase character, 1 uppercase character, 1 special character and be 8 characters or longer"
          error={accountFormErrors.password ? 'Please enter a valid password' : undefined}
          validate={[
            { regexp: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})') },
          ]}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
    </Box>
  );
  const financeFormStep = (
    <Box animation={formAnimation} height="medium" width="medium">
      <Form>
        <FormField
          label="What is your monthly income?"
          error={monthlyIncome <= 0 ? 'Please enter a valid monthly income' : undefined}
        >
          <TextInput
            placeholder="Enter your monthly income"
            icon={<Currency />}
            onKeyUp={onMonthlyIncomeUpdated}
            type="number"
            size="medium"
          />
        </FormField>
        <FormField label="Spending:">
          <TextInput
            placeholder="Enter your spending allocation"
            disabled
            icon={<Money />}
            value={`£${allocations.spending}`}
            type="text"
            size="medium"
          />
        </FormField>
        <FormField label="Savings:">
          <TextInput
            type="text"
            disabled
            icon={<Money />}
            value={`£${allocations.savings}`}
            placeholder="Enter your savings allocation"
            size="medium"
          />
        </FormField>
        <FormField label="Bills:">
          <TextInput
            type="text"
            disabled
            icon={<Money />}
            value={`£${allocations.bills}`}
            placeholder="Enter your bills allocation"
            size="medium"
          />
        </FormField>
      </Form>
    </Box>
  );
  const stepOneHeading = (
    <>
      <Heading textAlign="start" level={1} size="medium" margin="none">
        Hey! 👋
      </Heading>
      <Heading textAlign="center" level={4} size="small" margin={{ top: 'xsmall', bottom: 'none' }}>
        It&apos;s great to have you here!
      </Heading>
      <Heading textAlign="center" level={4} size="small" margin="none">
        First let&apos;s get some details about you!
      </Heading>
    </>
  );
  const stepTwoHeading = (
    <>
      <Heading textAlign="start" level={1} size="medium" margin="none">
        Thanks, {name}!
      </Heading>
      <Heading textAlign="center" level={4} size="small" margin={{ top: 'xsmall', bottom: 'none' }}>
        Now let&apos;s get a budget sorted for you!
      </Heading>
    </>
  );
  const stepThreeHeading = (
    <>
      <Heading textAlign="start" level={1} size="medium" margin="none">
        {isSubmitting ? 'Hold tight!' : "You're all set to go!"}
      </Heading>
      <Heading textAlign="center" level={4} size="small" margin={{ top: 'xsmall', bottom: 'none' }}>
        {name},{' '}
        {isSubmitting
          ? 'We are just in the process of creating your Budgeter account'
          : 'click below to go to your personalised Budgeter dashboard!'}
      </Heading>
      {isSubmitting && (
        <Box margin={{ top: 'medium' }}>
          <SyncLoader color="#06f3b7" loading size={25} />
        </Box>
      )}
    </>
  );
  const isNextStepDisabled = () => {
    switch (activeStep) {
      case 0:
        return Object.values(accountFormErrors).some((err) => err !== undefined);
      case 1:
        return monthlyIncome === undefined || monthlyIncome <= 0;
      default:
        return true;
    }
  };
  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="center"
      flex="grow"
      pad="xlarge"
      background={{ color: 'accent-1' }}
    >
      {activeStep <= 2 && (
        <Layer modal margin="none" animate>
          <Box align="center" justify="center" pad="large">
            <Box
              align="center"
              justify="start"
              direction="column"
              fill="horizontal"
              margin="medium"
            >
              {activeStep === 0 && stepOneHeading}
              {activeStep === 1 && stepTwoHeading}
              {activeStep === 2 && stepThreeHeading}
            </Box>
            <Box align="center" justify="center" alignSelf="start" fill>
              {activeStep === 0 && accountFormStep}
              {activeStep === 1 && financeFormStep}
            </Box>
            <Box
              align="center"
              justify="center"
              direction="row"
              fill="horizontal"
              margin={{ top: 'xlarge' }}
              pad="medium"
              gap="small"
              flex={{ grow: 1 }}
            >
              {activeStep === 1 && (
                <Button label="Previous" onClick={() => setActiveStep(activeStep - 1)} primary />
              )}
              {activeStep < 2 && (
                <Button
                  key={activeStep}
                  label="Next"
                  disabled={isNextStepDisabled()}
                  onClick={() => {
                    if (activeStep === 1) {
                      setTimeout(() => setIsSubmitting(false), 3000);
                    }
                    setActiveStep(activeStep + 1);
                  }}
                  primary
                />
              )}
              {activeStep === 2 && !isSubmitting && (
                <Button
                  label="Take Me There!"
                  icon={<Deploy />}
                  onClick={() => setActiveStep(activeStep + 1)}
                  primary
                />
              )}
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default SignUp;
