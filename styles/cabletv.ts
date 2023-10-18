import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 100,
  },

  inputContainer: {
    gap: 10,
  },
  airtimeInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    width: 325,
    height: 60,
  },
  mobileNumberInput: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    width: 325,
    height: 60,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    width: 325,
    height: 60,
  },
  nairaSymbol: {
    fontSize: 20,
    color: "#000000",
    marginRight: 5,
  },
  amountTextInput: {
    flex: 1,
    fontSize: 18,
    color: "#000000",
  },
  amountScrollView: {
    marginTop: 10,
  },
  amountOption: {
    paddingVertical: 12,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginRight: 10,
    width: "auto",
    height: 60,
  },
  amountOptionText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  amountOptionGap: {
    marginRight: 10,
  },
  airtimeRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  bottomSheetContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeading: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 20,
    color: "#8A8A8A",
  },
  airtimeOption: {
    paddingVertical: 12,
  },
  airtimeOptionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  actionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    resizeMode: "contain",
  },
  buyButtonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  buyButton: {
    backgroundColor: "rgba(129, 64, 207, 1)",
    borderRadius: 32,
    paddingVertical: 15,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#121212",
    marginBottom: 20,
  },
  modalSubText: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: "#616161",
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  closeButton: {
    backgroundColor: "#8140CF",
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  bottomButtonReset: {
    width: 327,
    backgroundColor: "#8140CF",
    padding: 15,
    borderRadius: 32,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#FEFEFE",
    textAlign: "center",
    fontSize: 17,
  },
  modalDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: "#EEEEEE",
    marginBottom: 20,
    paddingBottom: 5,
    marginVertical: 5,
  },
  modalDetailLabel: {
    fontSize: 17,
    color: "#8A8A8A",
  },
  modalDetailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  modalContainerPin: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContentPin: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  checkmarkContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  checkmarkCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EEE1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkText: {
    fontSize: 36,
    color: "#8140CF",
  },
  verifyText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#121212",
    marginBottom: 10,
  },
  pinInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  pinInput: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 4,
  },
  blackBackground: {
    backgroundColor: "#000000",
    color: "#000000",
  },
  highlighted: {
    borderColor: "#8140CF",
    borderWidth: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2D9EC",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
});
