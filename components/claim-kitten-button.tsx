import { Web3Button } from "@thirdweb-dev/react";
import { TransactionError } from "@thirdweb-dev/sdk";
import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { contract } from "../utils/constants";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall, prepareTransaction } from "thirdweb";

const ClaimKittenButton: React.FC = () => {
  const { refetch } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <TransactionButton
        transaction={() =>
          prepareContractCall({
            contract,
            method: "claimKitten",
            params: [],
          })
        }
        waitForReceipt
        onError={(error) => setError(error)}
        onClick={() => setError(null)}
        onReceipt={(resut) => {
          refetch();
        }}
      >
        Claim Kitten
      </TransactionButton>

      {/* <Web3Button
        className="mt-6 !bg-white !text-black !border-0 !py-2.5"
        contractAddress={CONTRACT_ADDR}
        action={(contract) => contract.call("claimKitten")}
        onError={(error) => setError(error)}
        onSubmit={() => setError(null)}
        onSuccess={(resut) => {
          refetch();
        }}
      >
        Claim Kitten
      </Web3Button> */}
      {error && (
        <p className="mt-2 text-xs first-letter:capitalize text-red-400 max-w-xs text-center">
          {(error as TransactionError).reason}
        </p>
      )}
    </div>
  );
};

export default ClaimKittenButton;
